# model-view-viewmodel-controller

This architecture pattern attempts to solve the problem of *[how to work with modular programming](https://en.wikipedia.org/wiki/Modular_programming)* for systems that use [JIT](https://en.wikipedia.org/wiki/Just-in-time_compilation) dependency injection. This pattern uses [model–view–viewmodel](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel) architecture while borrowing the [Hierarchical model–view–controller](https://en.wikipedia.org/wiki/Hierarchical_model–view–controller) pattern's "widgetization" content structure.

To put it bluntly: it's just MVVM with extra steps.

## Table of Contents

1. [Overview](#overview)
1. [Models](#models)
1. [Controlers](#controllers)
1. [Viewmodels](#viewmodels)
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

## Creation

1. The models is instantiated
1. models are injected into the models
1. viewmodels are instantiated
    1. inject viewmodels into viewmodel
    1. viewmodels are injected into the viewmodel
    1. viewmodels are instantiated
        1. 🔁 until all viewmodels have been injected
    1. viewmodels are bound to their views
1. viewmodels are bound to their views

## Distruction

1. viewmodel is destoryed
    1. collect child viewmodels
    1. destory viewmodels
        1. 🔁 until all children have been destoryed

## Communication

- local models can directly communicate with other models
- local models can directly communicate with external models
- local models can communicate with their viewmodels via an [Actor Model](https://en.wikipedia.org/wiki/Actor_model) based messaging system
- local models cannot communicate with another models viewmodels
- viewmodels cannot communicate with other viewmodels
- viewmodels can communicate with their parent models
