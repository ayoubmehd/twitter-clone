# Just another Twitter clone

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


#### Run migration
```copy
php artisan migrate
```

#### Run dev server

```copy
php artisan serve
```