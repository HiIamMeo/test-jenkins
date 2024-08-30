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
                withCredentials([sshUserPrivateKey(credentialsId: 'staging-ssh-key', keyFileVariable: 'SSH_KEY')]) {
                    sh '''
                        scp -i $SSH_KEY -r ./dist/ user@staging-server:/path/to/deploy
                        ssh -i $SSH_KEY user@staging-server "cd /path/to/deploy && npm install"
                    '''
                }
            }
        }

        stage('Integration Tests on Staging') {
            steps {
                echo 'Running Integration Tests on Staging...'
                withCredentials([sshUserPrivateKey(credentialsId: 'staging-ssh-key', keyFileVariable: 'SSH_KEY')]) {
                    sh '''
                        ssh -i $SSH_KEY user@staging-server "cd /path/to/deploy && npm run test:integration"
                    '''
                }
            }
        }

        stage('Deploy to Production') {
            steps {
                echo 'Deploying to Production...'
                withCredentials([sshUserPrivateKey(credentialsId: 'production-ssh-key', keyFileVariable: 'SSH_KEY')]) {
                    sh '''
                        scp -i $SSH_KEY -r ./dist/ user@production-server:/path/to/deploy
                        ssh -i $SSH_KEY user@production-server "cd /path/to/deploy && npm install"
                    '''
                }
            }
        }
    }

    triggers {
        githubPush()
    }
}
