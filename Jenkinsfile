pipeline {
  agent any
  tools {
    nodejs 'node-12.16.2'
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
    stage('Ejecuto selenium') {
      steps {
        sh 'node test.js'
      }
    }
    stage('Ejecuto servidor') {
      steps {
        sh 'node index.js'
      }
    }
  }
}