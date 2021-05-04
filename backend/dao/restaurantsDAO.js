let restaurants


export default class RestaurantsDAO{
    static async injectDB(conn){
        if(restaurants){
            return 
        }
        try{
            restaurants = await conn.db(procces.env.RESTREVIEWS_NS).collection("restaurants")
        }catch(e){
            console.error(`unable to establis a collection in handle restaurant ${e}`,)
        }
    }
    static async getRestaurants({
        filters = null, 
        page =0,
        restaurantsPerPage= 20,
    }={}){
        let query
        if(filters){
            if("name" in filters){
                query = {$text:{$search: filters["name"]}}
            }else if("cuisine" in filters) {
                query = {"cuisine": {$eq: filters["cuisine"]}}
            }else if("zipcode" in filters){
                query = {"address.zipcode":{$eq:filters["zipcode"]}}
            }
        }

        let cursor 
        try{
            cursor = await restaurants
            .find(query)

        }catch(e){
            console.error(`unable to localtes object in the data base ${e}`)
        }
    }


}

