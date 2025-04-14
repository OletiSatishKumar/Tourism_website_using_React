pipeline {
    agent any

    environment {
        NODE_ENV = 'development'
    }

    stages {
        stage('Clone Repository') {
            steps {
                echo 'Cloning the repository (main branch)...'
                git branch: 'master', url: 'https://github.com/OletiSatishKumar/Tourism_website_using_React.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing npm packages...'
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the Vite project...'
                bat 'npm run build'
            }
        }
    }

    post {
        success {
            echo '✅ Build and Linting passed successfully!'
        }
        failure {
            echo '❌ Build or Linting failed.'
        }
    }
}
