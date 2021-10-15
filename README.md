## Start Keycloak

From a terminal start Keycloak with the following command:

```
docker run -p 8080:8080 -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin quay.io/keycloak/keycloak:15.0.2
```

This will start Keycloak exposed on the local port 8080. It will also create an initial admin user with username admin and password admin.

Open keycloak at `http://localhost:8080`