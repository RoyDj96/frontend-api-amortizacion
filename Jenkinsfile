pipeline {
    agent any

    stages {
        stage('Dependency') {
            agent {
                docker {
                    image 'node:20'
                    args '-u root:root'  
                }
            }
            steps {
                sh 'npm install'
            }
        }

        /* stage('Ejecucion test playwright') {
            steps {
                build job: 'pipeline-test', wait: true 
            }
        } */
    }
    post {

        success {
            echo 'Test successful'
        }
        failure {
            echo 'Ocurrio una incidencia en el pipeline este mijo'
        }
    }
}
