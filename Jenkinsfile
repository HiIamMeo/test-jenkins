// 

pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                // Add test commands here if you have tests
                bat 'echo "No tests defined."'
            }
        }
        stage('Build and Deploy') {
            steps {
                bat 'node app.js'
            }
        }
    }
}
