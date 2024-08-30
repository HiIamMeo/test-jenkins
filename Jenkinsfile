pipeline {
    agent any
    environment {
        PATH = "$PATH:C:\\Users\\lephu\\AppData\\Roaming\\npm"
    }
    stages {
        // stage('Checkout') {
        //     steps {
        //         git url: 'https://github.com/HiIamMeo/repository-name.git', branch: 'main'
        //     }
        // }
        stage('Build') {
            steps {
                bat 'npm install'
                bat 'npm run build' // assuming you have a build step
            }
        }

        stage('Unit and Integration Tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('Code Analysis') {
            steps {
                bat 'npx eslint .'
            }
        }

        stage('Security Scan') {
            steps {
                bat 'npm run audit'
            }
        }

        stage('Deploy to Staging') {
            steps {
                echo 'Deploying to Staging...'
                // Add your deployment script or commands here
            }
        }

        stage('Integration Tests on Staging') {
            steps {
                echo 'Running Integration Tests on Staging...'
                // Add your integration testing script here
            }
        }

        stage('Deploy to Production') {
            steps {
                echo 'Deploying to Production...'
                // Add your production deployment script or commands here
            }
        }
    }

    triggers {
        githubPush()
    }
}
