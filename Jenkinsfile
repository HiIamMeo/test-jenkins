// 

pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building the application...'
                sh 'npm install'
            }
        }

        stage('Unit and Integration Tests') {
            steps {
                echo 'Running unit and integration tests...'
                sh 'npm test'  // Assuming you have test scripts defined in package.json
            }
        }

        stage('Code Analysis') {
            steps {
                echo 'Running code analysis...'
                sh 'npm run lint' // Assuming you have ESLint configured
            }
        }

        stage('Security Scan') {
            steps {
                echo 'Running security scan...'
                sh 'npm audit'
            }
        }

        stage('Deploy to Staging') {
            steps {
                echo 'Deploying to staging...'
                // Placeholder for actual deployment steps, e.g., AWS CLI commands
                sh 'echo "Deploy to staging server"'
            }
        }

        stage('Integration Tests on Staging') {
            steps {
                echo 'Running integration tests on staging...'
                // Placeholder for integration test scripts
                sh 'echo "Running integration tests on staging server"'
            }
        }

        stage('Deploy to Production') {
            steps {
                echo 'Deploying to production...'
                // Placeholder for actual deployment steps, e.g., AWS CLI commands
                sh 'echo "Deploy to production server"'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
        success {
            echo 'Pipeline succeeded.'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}

