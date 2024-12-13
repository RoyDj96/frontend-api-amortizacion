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
                sh 'docker run --rm -d --name container --network host -p 5173:5173 frontend'
            }
        }

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
                    sh 'docker stop container'
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
