# Suspect Miner - Testing Site

Simple site used to proof the concept for the suspect miner.

For more information regarding the Suspect Miner please visit: https://github.com/WagnerAthayde/suspectminer

## Installation

Git clone the application:

```console
git clone https://github.com/WagnerAthayde/testingsite.git
```

Change to application directory:

```console
cd testingsite
```

Run the following command to install dependencies:

```console
bundle install
```

Execute the database script

```console
rake db:migrate
```

## Running the application

Start HTTP web server:

```console
rails server
```

Access the address at any browser:

```console
http://localhost:3000/
```

# Javascript library usage

## If your desire is to use the javascript on you web site do as follows:

Copy to the appropriate path on your application the library mining.js found at:

```console
testingsite/app/assets/javascripts/mining.js
```

Make sure your contact submit form have the id:email_form with a contact_email field for the contact email.

```console
http://localhost:3000/

