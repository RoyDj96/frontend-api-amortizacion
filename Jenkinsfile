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
            sh 'docker run --rm -d --name frontend --network jenkins front'
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
            sh 'docker rm -f frontrend || true'
        }

        success {
            echo 'Test successful'
        }
        failure {
            echo 'Ocurrio una incidencia en el pipeline'
        }
    }
}
