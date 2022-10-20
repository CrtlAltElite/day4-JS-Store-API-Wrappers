// Testing ground!
import { getUser } from './api/apiBasicAuth.js'
import { CancelToken } from 'apisauce'
import apiCat from './api/apiCategory.js' 
import apiItem from './api/apiItem.js'

const source = CancelToken.source()
const token = 'PRH-uF7I4tUYu6o2F4_5gEvGvhmfREut18RHiniNSMU'
//source.token return the cancel token

const login = async (cancelToken) =>{
    const {user, error} = await getUser('kevinb@codingtemple.com', '1234', cancelToken)
    console.log(error?error:"it works")
    console.log(user?user:"bad login")
}

// login(source.token)

const cat_get = async (cancelToken) => {
    const {error, categories} = await apiCat.get(cancelToken)
    console.log(error)
    console.log(categories)
}
// cat_get(source.token)

const cat_post = async (cancelToken) =>{
    const {error} = await apiCat.post(token, "DELETEME", source.token)
    console.log(error)
}
// cat_post(source.token)

const cat_put = async (cancelToken) =>{
    const {error} = await apiCat.put(token, 3,"I WAS EDITED", source.token)
    console.log(error)
}
// cat_put(source.token)

const cat_del = async (cancelToken) =>{
    const {error} = await apiCat.del(token, 3, source.token)
    console.log(error)
}
// cat_del(source.token)


const item_get = async (cancelToken) =>{
    const {error, items} = await apiItem.get(cancelToken)
    console.log(error)
    console.log(items)
}

// item_get()

const item_post = async (cancelToken) =>{
    const newItem={
        "name" : "gfhg",
        "desc" : "zbzvcbxcvb",
        "img": "https://m.media-amazon.com/images/I/812egwRC2RL._SL1500_.jpg",
        "price": 99.99,
        "category_id":2
    }
    const {error} = await apiItem.post(token, newItem, cancelToken)
    console.log(error)
}
// item_post(source.token)

const item_get_by_id = async (cancelToken) =>{
    const {error, item} = await apiItem.getItem(2, cancelToken)
    console.log(error)
    console.log(item)
}
// item_get_by_id(source.token)

const item_get_by_cat_id = async (cancelToken) =>{
    const {error, items} = await apiItem.getByCat(2,cancelToken)
    console.log(error)
    console.log(items)
}

// item_get_by_cat_id(source.token)

const item_put = async (cancelToken) =>{
    const editItem={
        "name" : "JellyBelly Harry Potter jelly slugs candy",
        "desc" : "Ron's favourite food. Eat slugs!",
        "price": 123.21
    }
    const {error} = await apiItem.put(token, 2, editItem, cancelToken)
    console.log(error)

}
// item_put(source.token)

const item_delete = async (cancelToken) =>{
    const {error} = await apiItem.del(token, 2, cancelToken)
    console.log(error)
}

item_delete(source.token)