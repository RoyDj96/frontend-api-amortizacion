pipeline {
    agent any
    stages {
        stage('Create image') {
            steps {
                sh 'docker build -t frontend .'
            }
        }

        stage('Create temporary container') {
            steps {
                sh 'docker run --rm -d --name vite-container -p 5173:5173'
            }
        }

        stage('dependencies && run') { 
            steps {
                sh 'npm install'
                sh 'npm run dev --host'
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
                    sh 'docker stop frontend || true'
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
