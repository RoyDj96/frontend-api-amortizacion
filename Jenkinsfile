pipeline {
    agent any
    stages {

        stage('Ejecucion test playwright') {
            steps {
                build job: 'pipeline-test', wait: true 
            }
        }
    }
    post {
        success {
            echo 'Todo perfecto.'
        }
        failure {
            echo 'Ocurrio una incidencia de test playwright'
        }
    }
}
