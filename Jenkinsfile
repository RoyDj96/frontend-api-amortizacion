pipeline {
    agent {
        docker {
            image 'node:18'
        }
    }
    stages {
        stage('install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        satage('Crear contenedor temporal') {
            steps {
                sh '''
                docker run --rm -d --name frontend
                -v "$(pwd):/app"
                -w /app
                -p 5173:5173
                node:18 sh -c "npm install && npm run dev"
                '''
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
            echo 'Todo perfecto.'
        }
        failure {
            echo 'Ocurrio una incidencia en el pipeline'
        }
    }
}
