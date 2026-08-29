# Local & Edge AI Starter Stack

> A practical way to choose a local inference tool without pretending that “runs locally” automatically means private, fast, or production-ready.

**Last source review:** 2026-08-29  
**Status:** Source-reviewed; not yet hands-on tested

## Start with the deployment target

“Local AI” and “edge AI” overlap, but they are not interchangeable:

- **Local AI** runs on hardware you control, such as a laptop or workstation.
- **On-device AI** runs inside the product being used, such as a phone, wearable, or embedded device.
- **Edge AI** runs near the data source instead of depending entirely on a distant cloud service.

The right tool depends less on which project is trending and more on where the model must run, what hardware is available, and how much deployment control you need.

| I need to… | Start with | Why |
|---|---|---|
| Run and test an open model locally with minimal setup | [Ollama](#ollama) | Simple model management, a CLI, and a local API make it a practical first step. |
| Tune low-level LLM inference across varied hardware | [llama.cpp](#llamacpp) | Broad hardware support, quantization options, and a lightweight C/C++ implementation provide more control. |
| Deploy an exported model across languages and platforms | [ONNX Runtime](#onnx-runtime) | It supports portable inference for models exported from common training frameworks. |
| Put a PyTorch model on mobile or embedded hardware | [ExecuTorch](#executorch) | It is designed specifically for on-device PyTorch deployment across mobile and edge targets. |
| Experiment efficiently on Apple silicon | [MLX](#mlx) | Its unified-memory design and Apple-silicon focus make it a strong fit for Mac-based ML work. |

## Ollama

- **Best for:** Getting an open model running on a developer machine quickly and exposing it through a local REST API.
- **Why choose it:** The official project provides a CLI, model library, REST API, and Python and JavaScript libraries.
- **Watch for:** The model still needs to fit the machine’s available memory. A local model can also call remote tools or receive data from cloud-connected applications, so verify the entire workflow before calling it private.
- **Official sources:** [Ollama repository](https://github.com/ollama/ollama) · [API documentation](https://docs.ollama.com/api)

## llama.cpp

- **Best for:** Running quantized LLMs or VLMs with more control over hardware backends and inference settings.
- **Why choose it:** The project targets a wide range of hardware and supports multiple quantization levels, CPU and GPU backends, hybrid inference, a CLI, and an OpenAI-compatible server.
- **Watch for:** More control means more benchmarking and configuration work. Model format, quantization level, context size, and backend can materially change speed, memory use, and output quality.
- **Official source:** [llama.cpp repository](https://github.com/ggml-org/llama.cpp)

## ONNX Runtime

- **Best for:** Serving an exported model through a cross-platform runtime rather than choosing an LLM-specific local runner.
- **Why choose it:** ONNX Runtime can run models exported from frameworks including PyTorch, TensorFlow, and scikit-learn, with CPU and GPU packages available for supported platforms.
- **Watch for:** Export compatibility is model-specific. Confirm that the model’s operators, shapes, preprocessing, and target execution provider are supported before committing to the deployment path.
- **Official sources:** [ONNX Runtime documentation](https://onnxruntime.ai/docs/) · [Python quickstart](https://onnxruntime.ai/docs/get-started/with-python.html)

## ExecuTorch

- **Best for:** Deploying PyTorch models to phones, wearables, embedded devices, and microcontrollers.
- **Why choose it:** ExecuTorch is built for on-device inference and uses a lightweight runtime designed to take advantage of CPUs, NPUs, and DSPs across different hardware targets.
- **Watch for:** Mobile and embedded deployment adds constraints that desktop tests can hide: application size, battery use, thermal limits, model conversion, hardware delegation, and unsupported operations.
- **Official source:** [ExecuTorch overview](https://docs.pytorch.org/executorch/stable/intro-overview.html)

## MLX

- **Best for:** Prototyping, training, or running machine-learning workloads on Apple silicon.
- **Why choose it:** MLX is designed around Apple silicon and unified memory, with Python, C++, C, and Swift APIs and examples for language, image, and speech models.
- **Watch for:** A Mac-friendly development path is not automatically a portable production path. Check the intended deployment hardware before centering a project on MLX.
- **Official sources:** [MLX repository](https://github.com/ml-explore/mlx) · [MLX documentation](https://ml-explore.github.io/mlx/build/html/index.html)

## Where MCP fits

The [Model Context Protocol](https://modelcontextprotocol.io/docs/getting-started/intro) is an open standard for connecting AI applications to external data sources, tools, and workflows. It is not an inference runtime, but it can sit beside a local model and give an application access to useful capabilities.

That creates an important boundary: **a local model does not guarantee a local system**. An MCP server may be local or remote, and a tool call may send data across the network or trigger an external action. Review each server’s transport, permissions, authentication, logging, and data destination before connecting it.

## A sensible first experiment

1. Choose one narrow task and a small model that fits the target device.
2. Establish a cloud or desktop baseline before optimizing for the edge.
3. Measure startup time, response latency, memory use, quality, and—on mobile hardware—power and thermal behavior.
4. Test with realistic inputs, including failure cases and sensitive-data boundaries.
5. Document the exact model, quantization, runtime, hardware, and settings so the result can be reproduced.

## Selection rule

Use the highest-level tool that meets the real deployment requirement:

- Start with **Ollama** for fast local experiments.
- Move to **llama.cpp** when hardware tuning and quantized LLM inference matter.
- Choose **ONNX Runtime** for portable inference beyond LLM-only workflows.
- Choose **ExecuTorch** for PyTorch models targeting mobile or embedded devices.
- Choose **MLX** when Apple silicon is the deliberate platform, not merely the laptop currently available.

Do not claim a workload is private merely because the model process runs locally. Trace the full path taken by prompts, retrieved data, telemetry, logs, MCP servers, and downstream tools.
