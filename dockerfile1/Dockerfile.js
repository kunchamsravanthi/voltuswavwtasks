apiVersion: v1
 kind: Pod
 metadata:
   name: demo
 spec:
   containers:
   - name: testpod
     image: alpine:3.5
     command: ["ping", "8.8.8.8"]
