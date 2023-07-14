import { bookSearchFields } from "../constants/book.constants"
import { IBooks } from "../interface/book.interface."
import { Books } from "../model/book.model"

const getAllBooks = async (filters: {searchTerm?:string}) => {

    const {searchTerm, ...filtersData} = filters

    const andConditions = []

    if(searchTerm){
        andConditions.push({
            $or: bookSearchFields.map(field => ({
                [field]: {
                    $regex: searchTerm,
                    $options: "i"
                }
            }))
        })
    }

    if(Object.keys(filtersData).length){
        andConditions.push({
            $and: Object.entries(filtersData).map(([field, value]) => ({
                [field]: value
            }))
        })
    }

    const whereConditions = andConditions.length > 0 ? {$and: andConditions} : {}

    const result = await Books.find(whereConditions)
    return result
}

const postBook = async (payload: IBooks) => {
    const result = await Books.create(payload)
    return result
}

const updateBook = async (id: string, payload: Partial<IBooks>) => {
    const result = await Books.findByIdAndUpdate(id, payload, {new: true})
    return result
}

export const BookServices = {
    getAllBooks,
    postBook,
    updateBook
}