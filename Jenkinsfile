
pipeline {
    agent any

    environment {
        DOCKER_USER = "abhirocks493"
        IMAGE_NAME = "node-app-cicd"
    }

    stages {

        stage('Clone Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Abh2090/node-docker-cicd.git'
            }
        }

        stage('Build Image') {
            steps {
                sh 'docker build --no-cache -t node-app:v1 .'
            }
        }

        stage('Tag Image') {
            steps {
                sh 'docker tag node-app:v1 $DOCKER_USER/$IMAGE_NAME:v2'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                sh 'docker push $DOCKER_USER/$IMAGE_NAME:v2'
            }
        }

        stage('Deploy Container') {
            steps {
                sh '''
                docker stop node-container || true
                docker rm node-container || true
                docker run -d -p 8082:8080 --name node-container $DOCKER_USER/$IMAGE_NAME:v2
                '''
            }
        }
    }
}
