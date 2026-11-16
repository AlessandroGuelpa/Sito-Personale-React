A project works on the development machine and fails on another one. The runtime version, installed libraries and configuration can explain the difference. Docker packages the application with a defined set of dependencies. It also gives a team a reproducible image to build and test.

The [environment variables used in development and production](/blog/quando-luniverso-ti-cambia-le-variabili-in-produzione) still need checking. [Ruby gems](/blog/ruby-creare-una-gem) are one example of dependencies whose versions should be declared rather than inherited from a developer's machine.

## Understand what runs in a container

A container runs an isolated group of processes using a host kernel or the kernel available in its runtime environment. A virtual machine runs a guest operating system with its own kernel. Container mounts, network settings and permissions determine what those processes can reach. Keep those choices in view when comparing a local run with a deployed container.

## Build the same environment in CI

A Dockerfile starts from a base image, copies the required files and installs dependencies. For a Node.js application, choose a supported runtime version and commit the lockfile. Use `npm ci` in the build to install from that lockfile. Use `.dockerignore` to keep local dependencies, credentials and build artefacts out of the build context.

Build the image in CI and test that image before release. Supply secrets through the deployment environment. Put data that must survive new containers in a managed store or a volume with an appropriate lifecycle.

## Choose what you actually need to reproduce

List the runtime, libraries, connected services and build tools that cause discrepancies today. Containerising can help when the team needs to reproduce a combination of several of them. A static page with an existing reliable build may need very little environment configuration. Compare that benefit with the work of maintaining the image and deployment settings.

## Sources

- [Docker Docs — What is a container?](https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/)
- [Docker Docs — Dockerfile best practices](https://docs.docker.com/build/building/best-practices/)
