# ---------- STAGE 1: BUILD ----------
FROM golang:1.23-alpine AS builder

WORKDIR /app

# copy เฉพาะ go.mod / go.sum ก่อน เพื่อ cache dependency
COPY go.mod go.sum ./
RUN go mod download

# copy source code ทั้งโปรเจกต์
COPY . .

# build binary
RUN CGO_ENABLED=0 GOOS=linux go build -a -o main .

# ---------- STAGE 2: RUN ----------
FROM alpine:latest

RUN apk --no-cache add ca-certificates

WORKDIR /root

COPY --from=builder /app/main .
COPY --from=builder /app/docs ./docs

EXPOSE 8080
ENV GIN_MODE=release

ENTRYPOINT ["./main"]
