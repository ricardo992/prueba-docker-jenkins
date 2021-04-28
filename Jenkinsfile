pipeline {
  agent any
  tools {
    nodejs 'node-12.16.2'
  }

  options {
    timeout(time: 2, unit: 'MINUTES')
  }

  stages {
    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
  }
}