# model-view-viewmodel-controller

The *model-view-viewmodel-controller* software architecture pattern answers the question *[how to work with modular programming](https://en.wikipedia.org/wiki/Modular_programming)* in systems that use [JIT](https://en.wikipedia.org/wiki/Just-in-time_compilation) dependency injection. This pattern is based upon [model–view–viewmodel](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel) architecture while borrowing the "widgetization" concept from [Hierarchical model–view–controller](https://en.wikipedia.org/wiki/Hierarchical_model–view–controller).

![It's just MVVM with extra steps](/images/to-put-it-bluntly.jpg)

## Table of Contents

1. [Overview](#overview)
1. [Models](#models)
1. [Controlers](#controllers)
1. [Viewmodels](#viewmodels)
1. [Views](#views)
1. [Structures](#structures)

## Overview

This document will describe:

- creating modules
- creating submodules
- communication between modules
- communication between modules and submodules
    - passing data up the hierarchy
    - passing data to an unknown number of submodules

## Controllers

The role of a controller is to handle input from a view model or another controller. Controllers will manipulate and verify the data before passing it to a model.

- controllers are static
- controllers can communicate with other controllers (local and external)
- controllers instantiate models
- controllers can communicate with their models
- controllers can have children (view models)
- controllers can create children
- controllers are unaware of their children
- controllers can pass information to their children
    
## Models

The role of a model is to manage a state.

- models manage a state
- models can only communicate **locally** with their controller
- models can communicate with external controllers

## Viewmodels

The role of a view model is to handle input from the view or a controller.

- view models can communicate with controllers
- view models can manage a local state
- view models are bound to a view

## Views

The view is the structure, layout, and appearance of what a user sees on the screen.

- views receive input from the user
- views send input to the view model
- views are data-bound to its view model

## Structures

### Basic Structure

![A basic model-view-viewmodel-controller structure](/images/basic-structure.png)

### Expanded Structure

![An expanded model-view-viewmodel-controller structure](/images/expanded-structure.png)
