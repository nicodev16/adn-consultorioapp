pipeline {
    agent {
        label 'Slave_induccion'
    }
    
    options {
        buildDiscarder(logRotator(numToKeepStr: '3'))
        disableConcurrentBuilds()
    }

    tools {
        jdk 'JDK8_Centos' 
    }

    stages {
        stage('Checkout') {
            steps{
                echo "Checkout"
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: '*/main']],
                    doGenerateSubmoduleConfigurations: false,
                    extensions: [[$class: 'CleanCheckout']],
                    submoduleCfg: [],
                    userRemoteConfigs: [[credentialsId: 'GitHub_nicodev16', url: 'https://github.com/nicodev16/adn-consultorioapp.git']]
                ])
            }
        }

        stage('Install modules') {
            steps {
                echo "------->Install modules<------"
                sh 'npm install'
            }
        }

        stage('test') {
            steps {
                echo "------->Compile & Unit tests<------"
                sh 'npm run test'
            }
        }

        stage('Static code Analysis') {
            steps {
                echo '-----> Análisis de codigo estático<------'
                withSonarQubeEnv('Sonar'){
                    sh "${
                        tool name: 'SonarScanner',
                        type: 'hudson.plugins.sonar.SonarRunnerInstallation'}/bin/sonar-scanner
                        -Dproject.settings=sonar-project.properties"
                    }
                }
            }
        }

        stage('Build') {
            steps {
                echo '----->Build<-----'
                sh 'ng build --prod'
            }
        }

        post {
            always {
                echo 'This will always run'
            }

            success {
                echo 'This will run only if successful'
            }

            failure {
                echo  'This will run only if failed'
                mail (
                    to: 'nicolas.martin@ceiba.com.co', 
                    subject: 'Failed pipeline: ${currentBuild.fullDisplayName}',
                    body: 'Algo fallo con el despliegue')
            }

            unstable {
                echo 'This will run only if the run was marked as unstable'
            }

            changed {
                echo 'This will run only if the state of the pipeline has changed'
                echo 'For example, if the pipeline was previously failing but is now successful'
            }
        }
}