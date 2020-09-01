# model-view-viewmodel-controller

The model-view-viewmodel-controller software architecture pattern solves the problem of *[how to work with modular programming](https://en.wikipedia.org/wiki/Modular_programming)* in systems that use [JIT](https://en.wikipedia.org/wiki/Just-in-time_compilation) dependency injection. This pattern is based upon [model–view–viewmodel](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel) architecture while borrowing some concepts from [Hierarchical model–view–controller](https://en.wikipedia.org/wiki/Hierarchical_model–view–controller).

![It's just MVVM with extra steps](/images/to-put-it-bluntly.jpg)

## Table of Contents

1. [Overview](#overview)
1. [Models](#models)
1. [Controlers](#controllers)
1. [Viewmodels](#viewmodels)
1. [Views](#views)
1. [Creation](#creation)
    1. [With Controller](#creation-via-controller)
    1. [Without Controller](#creation-sans-controller)
1. [Distruction](#distruction)

## Overview

This document will describe how to:

- pass information from modules to their submodules
- pass information from submodule to their parent modules
- communication between modules
- passing information up the hierarchy
- passing information to an unknown number of submodules

### Basic Structure

![A basic model-view-viewmodel-controller structure](/images/basic-structure.png)

### Expanded Structure

![An expanded model-view-viewmodel-controller structure](/images/expanded-structure.png)
    
## Models

The role of a model is to manage a state.

- models manage a state
- models can only communicate **locally** with the injected controller
- models can communicate with external controllers

## Controllers

The role of a controller is to handle input from a viewmodel or another controller and pass the input to a model.

- controllers are static
- controllers can communicate with other controllers (local and external)
- controllers can have children (viewmodels)
- controllers are unaware of their children
- controllers can pass information to their children
- controllers instantiate models
- controllers can communicate with their models

## Viewmodels

The role of a viewmodel is to handle input from the user or a controller and update its view.

- viewmodels can communicate with an injected controller
- viewmodels can manage its local state
- viewmodels are bound to a view

## Views

The view is the structure, layout, and appearance of what a user sees on the screen.

- recieves input from the user
- sends input to the viewmodel
- bound to the viewmodels via data bindings

## Creation

### Creation Via Controller

1. controller is instantiated
1. controller instantiates model(s)
1. viewmodels are injected
1. viewmodels are instantiated
    1. dependencies injected into the viewmodels
    
### Creation Sans Controller

1. viewmodel is instantiated
1. dependencies injected

## Distruction

### Viewmodels

1. viewmodel is destoryed
    1. collect child viewmodels
    1. destory children
    
### Models

1. controller destroys the model
