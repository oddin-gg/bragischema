.PHONY: lint
lint:
	docker run --volume "$(CURDIR):/workspace" --workdir /workspace bufbuild/buf lint

.PHONY: generate
generate:
	docker run --volume "$(CURDIR):/workspace" --workdir /workspace bufbuild/buf generate

.PHONY: help
help:
	@echo "Available commands:"
	@echo "  make lint       - Checks all of the modules listed in the buf.yaml file against the specified set of lint rules."
	@echo "  make generate   - Generate code from proto files"
	@echo "  make help       - Show this help message"