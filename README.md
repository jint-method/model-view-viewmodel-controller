# Hierarchical model–view–viewmodel

The Hierarchical model–view–viewmodel software architectural pattern attempts to refine the [model–view–viewmodel](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel) architecture pattern for systems that use [JIT](https://en.wikipedia.org/wiki/Just-in-time_compilation) dependency injection.

## Table of Contents

1. [Overview](#overview)
1. [Structure](#structure)
1. [Creation](#creation)
1. [Distruction](#distruction)
1. [Communication](#communication)

## Overview

The Hierarchical model–view–viewmodel solves the problem *[how to work with modular programming](https://en.wikipedia.org/wiki/Modular_programming)?*

This document will describe how to:

- pass information from modules to their submodules
- pass information from submodule to their parent modules
- communication between modules
    - passing information up the hierarchy
    - passing information to an unknown number of children

## Structure

The Hierarchical model–view–viewmodel uses a the [model–view–viewmodel](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel) architecture while borrowing the and [Hierarchical model–view–controller](https://en.wikipedia.org/wiki/Hierarchical_model–view–controller) software architectural pattern's "widgetization" contect structure.

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

- local controllers can directly communication with other controllers
- local controllers can directly communicate with external controllers
- local controllers can communicate with their viewmodels via an [Actor Model](https://en.wikipedia.org/wiki/Actor_model) based messaging system
- local controllers cannot communicate with another controllers viewmodels
- viewmodels cannot communicate with other viewmodels
- viewmodels can communicate with their parent controller
