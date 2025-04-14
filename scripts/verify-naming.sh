#!/bin/bash
# Verify file naming consistency
find src -name "*.js" | grep -v -E "(PascalCase|camelCase)"