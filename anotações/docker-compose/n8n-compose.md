version: '3.8'

volumes:
  n8n_storage:
  postgres_storage:

networks:
  n8n_network:
    driver: bridge

services:
  postgres:
    image: postgres:16-alpine
    container_name: n8n_postgres
    restart: unless-stopped
    environment:
      POSTGRES_USER: n8n_user
      POSTGRES_PASSWORD: n8n_password_change_me
      POSTGRES_DB: n8n_database
    volumes:
      - postgres_storage:/var/lib/postgresql/data
    networks:
      - n8n_network
    healthcheck:
      test: ['CMD-SHELL', 'pg_isready -h localhost -U n8n_user -d n8n_database']
      interval: 5s
      timeout: 5s
      retries: 10

  n8n:
    image: docker.n8n.io/n8nio/n8n:latest
    container_name: n8n_app
    restart: unless-stopped
    ports:
      - "5678:5678"
    environment:
      - DB_TYPE=postgresdb
      - DB_POSTGRESDB_HOST=postgres
      - DB_POSTGRESDB_PORT=5432
      - DB_POSTGRESDB_DATABASE=n8n_database
      - DB_POSTGRESDB_USER=n8n_user
      - DB_POSTGRESDB_PASSWORD=n8n_password_change_me
      - GENERIC_TIMEZONE=America/Sao_Paulo
      - TZ=America/Sao_Paulo
      - N8N_DEFAULT_BINARY_DATA_MODE=filesystem
      # Se for usar em servidor com domínio e HTTPS, descomente e ajuste:
      # - WEBHOOK_URL=https://n8n.seudominio.com/
      # - N8N_HOST=n8n.seudominio.com
    volumes:
      - n8n_storage:/home/node/.n8n
    networks:
      - n8n_network
    depends_on:
      postgres:
        condition: service_healthy