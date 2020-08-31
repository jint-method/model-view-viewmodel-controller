# JINT Architecture

The JINT attempts to solve the problem of *[how to work with modular programming](https://en.wikipedia.org/wiki/Modular_programming)* for systems that use [JIT](https://en.wikipedia.org/wiki/Just-in-time_compilation) dependency injection. This architecture pattern uses the [model–view–viewmodel](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel) architecture while borrowing the [Hierarchical model–view–controller](https://en.wikipedia.org/wiki/Hierarchical_model–view–controller) software architectural pattern's "widgetization" content structure.

To put it bluntly: JINT Architecture is just MVVM with extra steps.

## Table of Contents

1. [Overview](#overview)
1. [Creation](#creation)
1. [Distruction](#distruction)
1. [Communication](#communication)

## Overview

This document will describe how to:

- pass information from modules to their submodules
- pass information from submodule to their parent modules
- communication between modules
    - passing information up the hierarchy
    - passing information to an unknown number of children
    
## Models

The role of a model is to manage a state will be passed down to the viewmodels.

- models are static
- models manage a state
- models can communicate with other models (local and external)
- models can have children (viewmodels)
- models are unaware of their children
- models can pass information to their children

## Creation

1. The models is instantiated
1. models are injected into the models
1. viewmodels are instantiated
    1. inject viewmodels into viewmodel
    1. viewmodels are injected into the viewmodel
    1. viewmodels are instantiated
        1. 🔁
    1. viewmodels are bound to their views
1. viewmodels are bound to their views

## Distruction

1. viewmodel is destoryed
    1. collect child viewmodels
    1. destory viewmodels
        1. 🔁

## Communication

- local models can directly communicate with other models
- local models can directly communicate with external models
- local models can communicate with their viewmodels via an [Actor Model](https://en.wikipedia.org/wiki/Actor_model) based messaging system
- local models cannot communicate with another models viewmodels
- viewmodels cannot communicate with other viewmodels
- viewmodels can communicate with their parent models
