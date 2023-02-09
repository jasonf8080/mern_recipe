import { StatusCodes } from "http-status-codes"
import BadRequestError from "../errors/bad-request.js";
import NotFoundError from "../errors/not-found.js";
import List from "../models/List.js"

const checkExistingList = async(req, res) => {
    const userList = await List.findOne({userID: req.user.userID});
    console.log(userList)
    if(!userList){
        return res.status(StatusCodes.OK).json({userList:[{list:[], checkedList:[]}], userExists: false})
    } 
        return res.status(StatusCodes.OK).json({userList, userExists: true})
    
    
}

const createList = async(req, res) => {
    const {item} = req.body;
    console.log(item)
    const userList = await List.create({userID: req.user.userID, list: item})

    //const list = await List.create({userID: req.user.userID})
    res.status(StatusCodes.CREATED).json({userList})
}

const editList = async(req, res) => {
    const {item} = req.body;
    const userList = await List.findOne({userID: req.user.userID});
    if(!userList){
        throw new NotFoundError('Something went wrong, cant find user')
    }

    const itemAlreadyAdded = userList.list.find((listItem) => listItem === item) || userList.checkedList.find((listItem) => listItem === item)
    if(itemAlreadyAdded){
        throw new BadRequestError('Item has been already added to the list')
    }

    userList.list = [...userList.list, item]
    await userList.save();

    res.status(StatusCodes.OK).json({userList})
}




const checkItem = async(req, res) => {
    const {item} = req.body;

    const userList = await List.findOne({userID: req.user.userID});
    if(!userList){
        throw new NotFoundError('Something went wrong, cant find user')
    }

    userList.checkedList = [...userList.checkedList, item]
    const newList = userList.list.filter((listItem) => listItem !== item);
    userList.list = newList;
    await userList.save();

    res.status(StatusCodes.OK).json({userList})
}


const uncheckItem = async(req, res) => {
    const {item} = req.body;

    const userList = await List.findOne({userID: req.user.userID});
    if(!userList){
        throw new NotFoundError('Something went wrong, cant find user')
    }

    userList.list = [...userList.list, item]
    const newList = userList.checkedList.filter((listItem) => listItem !== item);
    userList.checkedList = newList;
    await userList.save();

    res.status(StatusCodes.OK).json({userList})
}


const editListItem = async(req, res) => {
    const {editingItem, newItem} = req.body;

    if(!newItem){
        throw new BadRequestError('Please provide a list item')
    }

    const userList = await List.findOne({userID: req.user.userID});
    if(!userList){
        throw new NotFoundError('Something went wrong, cant find user')
    }

    const itemExists = userList.list.find((item) => item === editingItem);
    if(!itemExists){
         throw new BadRequestError('item doesnt exist')
    }

    const itemAlreadyAdded = userList.list.find((listItem) => listItem === newItem) || userList.checkedList.find((listItem) => listItem === newItem)
    if(itemAlreadyAdded ){
        throw new BadRequestError('Item has been already added to the list')
    }

   



    const newList = userList.list.map((item) => {
        if(item !== editingItem){
            return item
        } else {
            return newItem
        }
    })

    userList.list = newList;
    await userList.save();

    res.status(StatusCodes.OK).json({userList})
}

const deleteListItem = async(req, res) => {
    const {editingItem} = req.body;

    if(!editingItem){
        throw new BadRequestError('Something went wrong!')
    }

    const userList = await List.findOne({userID: req.user.userID});
    if(!userList){
        throw new NotFoundError('Something went wrong, cant find user')
    }

    const itemExists = userList.list.find((item) => item === editingItem);
    if(!itemExists){
         throw new BadRequestError('item doesnt exist')
    }

    const newList = userList.list.filter((item) => item !== editingItem)

    userList.list = newList;
    await userList.save();

    res.status(StatusCodes.OK).json({userList})


}



export {checkExistingList, createList, editList, checkItem, uncheckItem, editListItem, deleteListItem} 