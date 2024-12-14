pipeline {
    agent any

    stages {
        stage('create image') {
            steps {
                sh 'docker build -t front .'
            }
        }
    stage('create container') {
        steps {
            sh 'docker network ls'
            sh 'docker run --name frontend -p 5173:5173 --network bridge front'
            sh 'docker logs frontend'
        }
    }

        /* stage('Ejecucion test playwright') {
            steps {
                build job: 'pipeline-test', wait: true 
            }
        } */
    }
    post {
        always {
            sh 'docker rm -f frontend || true'
        }

        success {
            echo 'Test successful'
        }
        failure {
            echo 'Ocurrio una incidencia en el pipeline'
        }
    }
}
