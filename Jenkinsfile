pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building...'
                // Example Maven build command
                bat 'mvn clean package'
            }
        }
        stage('Unit and Integration Tests') {
            steps {
                echo 'Running Unit and Integration Tests...'
                // Example command to run tests
                bat 'mvn test'
            }
        }
        stage('Code Analysis') {
            steps {
                echo 'Performing Code Analysis...'
                // SonarQube analysis command
                withSonarQubeEnv('SonarQube') {
                    bat 'mvn sonar:sonar'
                }
            }
        }
        stage('Security Scan') {
            steps {
                echo 'Performing Security Scan...'
                // Example OWASP ZAP or Checkmarx command
                bat 'zap-cli quick-scan http://example.com'
            }
        }
        stage('Deploy to Staging') {
            steps {
                echo 'Deploying to Staging...'
                // Example deployment command
                sbath 'ansible-playbook -i inventory/hosts deploy_staging.yml'
            }
        }
        stage('Integration Tests on Staging') {
            steps {
                echo 'Running Integration Tests on Staging...'
                // Example integration test command
                bat 'mvn verify'
            }
        }
        stage('Deploy to Production') {
            steps {
                echo 'Deploying to Production...'
                // Example deployment command
                bat 'ansible-playbook -i inventory/hosts deploy_production.yml'
            }
        }
    }

    triggers {
        // Trigger the pipeline on a GitHub push
        githubPush()
    }
}
