pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                sh '''
                sudo yum update -y
                sudo yum install -y docker
                sudo systemctl start docker
                sudo systemctl enable docker
                sudo usermod -aG docker jenkins

                sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
                sudo chmod +x /usr/local/bin/docker-compose
                docker-compose --version
                '''
            }
        }

        stage('Clone Repo') {
            steps {
                git 'git clone https://github.com/PawanKumarzmr12/DataGenProject.git'
            }
        }

        stage('Run Docker Compose') {
            steps {
                sh '''
                docker-compose down || true
                docker-compose up -d --build
                '''
            }
        }
    }

    post {
        success {
            echo "✅ App deployed successfully!"
        }
        failure {
            echo "❌ Something went wrong!"
        }
    }
}
