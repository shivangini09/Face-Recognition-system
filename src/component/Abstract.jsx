import React from 'react'

function Abstract() {
  return (
    <div>
      <p className='header_context'>Abstract</p>
      <p className='context'>
        In this project, we explore the effectiveness of feature extraction techniques—Histogram of Oriented Gradients (HOG), Convolutional Neural Networks (CNN), and Local Binary Patterns (LBP)—for improving facial recognition accuracy. We employ these techniques to extract discriminative features from facial images, capturing patterns crucial for accurate identification. After feature extraction, we evaluate the performance of various classifiers and optimised hyperparameters wherever required to classify facial images based on their labels(names associated with the images).
      </p>
    </div>
  )
}

export default Abstract
