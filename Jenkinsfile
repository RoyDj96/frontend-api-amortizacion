pipeline {
    agent any
    stages {
        stage('Create image') {
            steps {
                sh 'docker build -t frontend .'
            }
        }

        stage('start image') {
            steps {
                sh 'docker run --rm -d --name vite-container frontend'
            }
        }

        /* stage('run') { 
            steps {
                sh 'npm run dev --host'
            }
        } */

        stage('Ejecucion test playwright') {
            steps {
                build job: 'pipeline-test', wait: true 
            }
        }
    }
    post {
        always {
            // detener contenedor temporal
            script {
                steps {
                    sh 'docker stop frontend'
                }
            }
        }
        success {
            echo 'Test successful'
        }
        failure {
            echo 'Ocurrio una incidencia en el pipeline este mijo'
        }
    }
}
