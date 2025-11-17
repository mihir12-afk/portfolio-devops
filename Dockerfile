# Use official Nginx image
FROM nginx:alpine

# Remove default website
RUN rm -rf /usr/share/nginx/html/*

# Copy your website files to nginx html directory
COPY . /usr/share/nginx/html

# Expose port
EXPOSE 80
