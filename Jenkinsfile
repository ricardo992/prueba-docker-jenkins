pipeline {
  agent any
  tools {
    nodejs 'node-1.4.0'
  }

  options {
    timeout(time: 2, unit: 'MINUTES')
  }

  stages {
    stage('Instalo las dependencias') {
      steps {
        sh 'npm install'
      }
    }
  }
}