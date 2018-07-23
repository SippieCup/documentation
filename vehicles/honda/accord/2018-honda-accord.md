---
id: 2018-honda-accord
title: 2018 Honda Accord
---
# 2018 Honda Accord

The 2018 Honda Accord was upstreamed to the [commaai/openpilot](https://github.com/commaai/openpilot) repository and generally means it is a compatible / supported vehicle for openpilot.

We recommend you connect to the [Comma Slack](https://slack.comma.ai) and double check to see how well it is supported for your liking.

## Compatibility

### Longitudinal Control

Openpilot has partial longitudinal control (acceleration and braking) over the 2018 Accord.
Due to ECU limitations, this model can only partially be controlled by Openpilot.

Instead of sending actual acceleration / deceleration commands directly to the CAN, Openpilot will only be able to send factory ACC control messages. 

But is still perfectly sufficient for usage.

### Lateral Control

Openpilot has full lateral control (steering) over the 2018 Accord.

## EON Mounting

We do not have a recommended mount yet, we will update when we find that.

## Recommended Hardware

If you're confident your vehicle matches the specifications above, these are some things you may need to get started.

* 1 x [EON](/hardware/eon/)
* 1 x [Panda](/hardware/panda/)
* 1 x [Giraffe](/hardware/giraffe/)

## Comma Pedal

This vehicle supports stop and go by default and does not benefit from Comma Pedal.


## Videos

{{ "https://www.youtube.com/watch?v=1zCtj3ckGFo" | noembed }}


