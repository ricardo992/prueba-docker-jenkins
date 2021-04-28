pipeline {
  agent any
  tools {
    nodejs 'node'
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