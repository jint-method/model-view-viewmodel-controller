# model–view–viewmodel-controller

The model–view–viewmodel-controller software architectural pattern attempts to solve the problem of *[how to work with modular programming](https://en.wikipedia.org/wiki/Modular_programming)* for systems that use [JIT](https://en.wikipedia.org/wiki/Just-in-time_compilation) dependency injection. This pattern uses the [model–view–viewmodel](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel) architecture while borrowing the and [Hierarchical model–view–controller](https://en.wikipedia.org/wiki/Hierarchical_model–view–controller) software architectural pattern's "widgetization" content structure.

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
    
## Controller

Unlike [MVVM](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel) this pattern has a controller. The role of a controller is to manage a state that can render through the children's views.

- controllers are static
- controllers manage a state
- controllers can communicate with other controllers (local and external)
- controllers can have children (viewmodels)
- controllers are unaware of their children
- controllers can pass information to their children

## Creation

1. The controller is instantiated
1. models are injected into the controller
1. viewmodels are instantiated
    1. inject controller into viewmodel
    1. models are injected into the viewmodel
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

- local controllers can directly communicate with other controllers
- local controllers can directly communicate with external controllers
- local controllers can communicate with their viewmodels via an [Actor Model](https://en.wikipedia.org/wiki/Actor_model) based messaging system
- local controllers cannot communicate with another controllers viewmodels
- viewmodels cannot communicate with other viewmodels
- viewmodels can communicate with their parent controller
