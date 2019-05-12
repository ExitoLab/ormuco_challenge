### Description
This application was developed with Python programming language using the Flask Framework and PostgreSQL database was implemented. The application is dockerize and running on aws.

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