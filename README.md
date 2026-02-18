# Pipeline de Deploy com GitLab, Docker e Kubernetes

## Descrição do Projeto

Este projeto demonstra a criação de um pipeline de deploy automatizado utilizando GitLab CI/CD, Docker e Kubernetes (GKE). O pipeline contempla dois cenários:

1. **Deploy em Container Docker** - Aplicação Node.js containerizada e executada em Docker
2. **Deploy em Cluster Kubernetes** - Aplicação implantada em cluster Kubernetes na Google Cloud Platform (GCP)

## Arquitetura

```
GitLab Repository
    │
    ├── Branch: docker-deploy
    │       │
    │       └── GitLab CI/CD → Build Docker Image → Push to Registry → Deploy Container
    │
    └── Branch: kubernetes-deploy
            │
            └── GitLab CI/CD → Build Docker Image → Push to GCR → Deploy to GKE Cluster
```

## Tecnologias Utilizadas

- **GitLab CI/CD** - Pipeline de integração e entrega contínua
- **Docker** - Containerização da aplicação
- **Kubernetes (GKE)** - Orquestração de containers em produção
- **Node.js** - Runtime da aplicação
- **Google Cloud Platform** - Infraestrutura cloud

## Estrutura do Projeto

```
├── app/
│   ├── server.js          # Aplicação Node.js
│   └── package.json       # Dependências
├── docker/
│   └── Dockerfile         # Imagem Docker da aplicação
├── kubernetes/
│   ├── deployment.yaml    # Deployment Kubernetes
│   └── service.yaml       # Service LoadBalancer
├── .gitlab-ci.yml         # Pipeline CI/CD
└── README.md
```

## Pipeline CI/CD (.gitlab-ci.yml)

O pipeline possui os seguintes estágios:

1. **Build** - Construção da imagem Docker
2. **Test** - Execução de testes automatizados
3. **Push** - Envio da imagem para o registry
4. **Deploy** - Deploy no ambiente alvo (Docker ou Kubernetes)

## Como Executar

### Pré-requisitos
- Docker instalado
- kubectl configurado
- Acesso ao GCP (para deploy em GKE)
- Conta no GitLab

### Deploy Local com Docker
```bash
cd app
docker build -t app-pipeline -f ../docker/Dockerfile .
docker run -d -p 8080:8080 app-pipeline
```

### Deploy no Kubernetes
```bash
kubectl apply -f kubernetes/deployment.yaml
kubectl apply -f kubernetes/service.yaml
kubectl get pods
kubectl get services
```

## Projeto DIO - Microsoft Azure Advanced

Desafio de projeto do bootcamp Microsoft Azure Advanced da DIO.
