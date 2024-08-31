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
                // bat 'nohup npm install &'
            }
        }

        stage('Unit and Integration Tests') {
            steps {
                bat 'npm test'
            }
            post {
                success {
                    emailext (
                        to: "lephuc1752001@gmail.com",
                        subject: "Unit and Integration Tests Stage Success",
                        body: "The Unit and Integration Tests stage has completed successfully!",
                        attachLog: true
                    )
                }
                failure {
                    emailext (
                        to: "lephuc1752001@gmail.com",
                        subject: "Unit and Integration Tests Stage Failure",
                        body: "The Unit and Integration Tests stage has failed!",
                        attachLog: true
                    )
                }
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
            post {
                success {
                    emailext (
                        to: "lephuc1752001@gmail.com",
                        subject: "Security Scan Stage Success",
                        body: "The Security Scan stage has completed successfully!",
                        attachLog: true
                    )
                }
                failure {
                    emailext (
                        to: "lephuc1752001@gmail.com",
                        subject: "Security Scan Stage Failure",
                        body: "The Security Scan stage has failed!",
                        attachLog: true
                    )
                }
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


// pipeline {
//     agent any
//     stages {
//         stage("Build") {
//             steps {
//                 echo "Building the code using Maven"
//             }
//         }
        
//         stage("Unit and Integration Tests") {
//             steps {
//                 echo "Running unit tests with JUnit and integration tests with Selenium"
//             }
//             post {
//                 success {
//                     emailext (
//                         to: "lephuc1752001@gmail.com",
//                         subject: "Unit and Integration Tests Stage Success",
//                         body: "The Unit and Integration Tests stage has completed successfully!",
//                         attachLog: true
//                     )
//                 }
//                 failure {
//                     emailext (
//                         to: "lephuc1752001@gmail.com",
//                         subject: "Unit and Integration Tests Stage Failure",
//                         body: "The Unit and Integration Tests stage has failed!",
//                         attachLog: true
//                     )
//                 }
//             }
//         }

//         stage("Code Analysis") {
//             steps {
//                 echo "Analyzing code quality with SonarQube"
//             }
//         }

//         stage("Security Scan") {
//             steps {
//                 echo "Performing security scan using OWASP ZAP"
//             }
//             post {
//                 success {
//                     emailext (
//                         to: "lephuc1752001@gmail.com",
//                         subject: "Security Scan Stage Success",
//                         body: "The Security Scan stage has completed successfully!",
//                         attachLog: true
//                     )
//                 }
//                 failure {
//                     emailext (
//                         to: "lephuc1752001@gmail.com",
//                         subject: "Security Scan Stage Failure",
//                         body: "The Security Scan stage has failed!",
//                         attachLog: true
//                     )
//                 }
//             }
//         }

//         stage("Deploy to Staging") {
//             steps {
//                 echo "Deploying application to AWS EC2 staging server"
//             }
//         }

//         stage("Integration Tests on Staging") {
//             steps {
//                 echo "Running integration tests on staging environment using Selenium"
//             }
//         }

//         stage("Deploy to Production") {
//             steps {
//                 echo "Deploying application to AWS EC2 production server"
//             }
//         }
//     }
// }