# Just another Twitter clone

## Presentaion
[Presentaion](https://docs.google.com/presentation/d/1xxM7AeKwUhgpbnYbbt3ZS3NDvdaVQyeEAgH6Nsj7Hog/edit#slide=id.p)

## Setting up the project


### Requirements
- PHP v8.x
- composer v2.x

### Steps

Clone the project localy
```copy
git clone https://github.com/ayoubmehd/twitter-clone.git
```

#### Install dependencies
```copy
composer install
```

Create a mysql database, Copy .env.example to .env and put the database cofig in the new .env file
> If you have docker & docker-compose installed just run `docker-compose up` this will start a mysql database with credentials username=root password=root

#### Run migration
```copy
php artisan migrate
```

#### Run dev server

```copy
php artisan serve
```
