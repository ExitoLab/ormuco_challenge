### Description
This application was developed with Python programming language using the Flask Framework, PostgreSQL database and Javascript were implemented. The application is dockerize and running on aws.

The challenge is uploaded on the github folder and the file name is `Technical Operations`

The database was deployed using persistent volume, this means that if the docker container go missing or deleted it will not affect the data. The data volume is mounted on a the host machine.

Ansible configuration tools was used in deploying the application to aws. All the codes used in executing this challenge are all in the github folder. Docker and ansible is installed on the machine on aws while bootstraping the machine on aws.

The application checks if the pet name exist in the database. If it exists, a message will be displayed informating the user that it exist and it will also disable the register button so that the user will not be able to proceed.

### Description of the database
1. PostgreSQL database was used for this project
2. There is just one table `pets`

## Step by step guide in deploying the application
1. Do a git clone of the project or run ` bash app_clone.sh `
2. Navigate to the folder `ormuco_challenge`
3. Run this command to deploy the application ` ansible-playbook docker_app.yaml `
4. `docker_app.yaml` contains the ansible playbook for deploying the application
5. The playbook will deploy the application (Flask app) and database (PostgreSQL)

The following endpoints were implemented:

| Name                       | Method   | URL
| ---                        | ---      | ---
| Register new Pet           | `POST`   | `/register_pet`
| Check if pets exist        | `GET`    | `/check_pet_name`

## Stack includes

1. Flask framework
2. PostgreSQL
3. Docker
4. Docker Compose
5. Github
6. Ansible
7. Python Programming Language
8. AWS
9. Javascript, Jquery, Ajax

The application can easily be scaled because it is a dockerize app and it can also be deployed in a kubernetes environment where by the application can increased based on load running on it.

The security group is configured for only the port groups that is needed. Http has only been configured.

## Limitations

In achieving the https, i needed to purchase a domain name, this was a limitation for me. However, the ssl certificate can be gotten for free from LetEncrypt. And it will be added to the load balancer, i had already enabled port 443

I have added the ssh key on the server.

The application can be accessible via http://34.243.141.6:5000/