pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                nodejs('Node'){
                    sh 'npm install'   
                }
            }
        }

        stage('Ejecucion test playwright') {
            steps {
                build job: 'pipeline_test', wait: true 
            }
        }
    }
    post {
        success {
            echo 'Todo perfecto.'
        }
        failure {
            echo 'Hubo un error en quien sabe donde (._.) .'
        }
    }
}
