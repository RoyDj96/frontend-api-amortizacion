pipeline {
    agent any
    stages {

        satage('Crear contenedor temporal') {
            sh '''
            docker run --rm -d --name frontend
            -v "$(pwd):/app"
            -w /app
            -p 5173:5173
            node:18 sh -c "npm install && npm run dev"
            '''
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
                sh 'docker stop frontend || true'
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
