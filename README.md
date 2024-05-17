###### This is an api developed using node.js/express and postgres db 
###### Necessary docker files are as well included


###### File system breakdown:
    index.js -> the main file
    /models -> the model structure(ORM)
    /controllers -> holds the controller functions
    /routes -> defines all th routes

    dbConnection.js -> the db connection
    error.js

    Dockerfile
    docker-compose.yml

    .env (
        included to give you an easier time when installing & running the api; otherwise
        would not be included
    )
    .gitignore


###### How to run
    git clone https://github.com/omosh-notlim/voyage-products.git
    cd voyage-products

    docker compose up -d node_db
    docker compose up --build


###### ---------------------------------------------------
###### Runs on port 3004



###### --------------------------------------------------
###### Sample routes

###### to view all   
    api/v1/products?page=1&size=5

###### to post        
    api/v1/products/new

###### to view by product_id/to update/to delete
    api/v1/products/2


###### sample body
    {
        "product_name": "Flood light",
        "unit_of_measurement": "count",
        "unit_price_in_KES": 6199,
        "available_quantity": 4
    }